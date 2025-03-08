import { Component, Input, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaymentService } from '../../../service/payment/payment.service';


@Component({
  selector: 'app-paypal-module',
  standalone: true,
  imports: [NgxPayPalModule, ToastrModule, HttpClientModule],
  templateUrl: './paypal-module.component.html',
  styleUrls: ['./paypal-module.component.css']
})
export class PaypalModuleComponent implements OnInit {
  @Input() totalAmount!: number;
  @Input() products!: { name: string; pricePerItem: number; quantity: number }[];

  public payPalConfig?: IPayPalConfig;
  private webhookUrl = 'https://discord.com/api/webhooks/1302730397066723378/7mrooQPjuIkDnqcH0FPnp1DKNFnbbsAh450e22HeluttNia6wuPWoapqRnQevoBspu7V';
  @Input() playerNickname!: string;


  constructor(private toastr: ToastrService, private http: HttpClient, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'CZK',
      clientId: 'AeZeTf-zTGGbRx7txnIojjhKR1xvTSq8BBinB6RiZjbhNMNAW1wHdtPA726w-0rFmB32Eq4K8ZZP2xEL',
      //fundingSource: 'PAYPAL',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'CZK',
            value: this.totalAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'CZK',
                value: this.totalAmount.toFixed(2)
              }
            }
          },
          items: this.products.map(item => ({
            name: item.name,
            quantity: item.quantity.toString(),
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'CZK',
              value: item.pricePerItem.toFixed(2),
            },
          }))
        }]
      },
      advanced: {
        commit: 'true',
        extraQueryParams: [
          { name: 'locale', value: 'cs_CZ' }
        ]
      },
      style: {
        label: 'checkout',
        color: "blue",
        shape: "pill",
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.toastr.success('Tvé položky za chvíli dorazí"', 'Platba Proběhla!');
          this.paymentService.setPlayerNickname("GGG"); //TADY

          // Send webhook to Discord
          this.sendDiscordWebhook(details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }

  private sendDiscordWebhook(details: any): void {
    const embed = {
      username: 'Payment Bot',
      "embeds": [
        {
            "title": "Nová PayPal Platba :wave:",
            "color": 61695,
            "timestamp": "2024-11-03T20:28:48.146Z",
            "url": "https://discord.com",
            "author": {
                "url": "https://discord.com"
            },
            "footer": {
                "text": "Hisen je sigma",
                "icon_url": "https://mineskin.eu/avatar/H1senk0/100.png"
            },
            "fields": [
                {
                    "name": "Cena",
                    "value": `${this.totalAmount.toFixed(2)} CZK`,
                    "inline": true
                },
                {
                    "name": "Real Jméno",
                    "value": `${details.payer.name.given_name} ${details.payer.name.surname}`,
                    "inline": true
                },
                {
                    "name": "Nick",
                    "value": this.paymentService.getPlayerNickname,
                    "inline": true
                },
                {
                    "name": "Email",
                    "value": details.payer.email_address,
                    "inline": false
                },
                {
                    "name": "Produkty",
                    "value": this.products.map(item => `> ${item.name} x${item.quantity}`).join('\n'),
                    "inline": false
                }
            ]
        }
    ]
    };

    // Send POST request to Discord webhook
    this.http.post(this.webhookUrl, embed).subscribe({
      next: () => console.log('Webhook sent successfully'),
      error: (err) => console.error('Error sending webhook', err)
    });
  }
}
