abstract class Payment {
  abstract tax: number;
  constructor(
    public amount: number,
    public date: Date,
    public description: string
  ) {}

  getPaymentInfo(): string {
    return `${this.amount} - ${this.date} - ${this.description}`;
  }

  processPayment(): void {
    const newAmount = this.amount * this.tax;
    console.log(`Processing payment:${newAmount} ${this.getPaymentInfo()}`);
  }
}

class PaymentPix extends Payment {
  tax = 1.1;
}
class PaymentCard extends Payment {
  tax = 1.05;
}
class PaymentBoleto extends Payment {
  tax = 1.2;
}

const pixPayment = new PaymentPix(100, new Date(), "Pix payment");
pixPayment.processPayment();

// nao consigo fazer pro causa do abstract
// const payment = new Payment(100, new Date(), "Card payment");
// payment.processPayment();
