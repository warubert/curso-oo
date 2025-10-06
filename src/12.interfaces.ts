interface ProcessPaymentInterface {
  startPayment(amount: number): Promise<string>;
  confirmPayment(paymentId: string): Promise<boolean>;
  cancelPayment(paymentId: string): Promise<boolean>;
  getPaymentInfo(paymentId: string): Promise<string>;
}

class PixPayment implements ProcessPaymentInterface {
  startPayment(amount: number): Promise<string> {
    throw new Error("Method not implemented.");
  }
  confirmPayment(paymentId: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  cancelPayment(paymentId: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getPaymentInfo(paymentId: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
