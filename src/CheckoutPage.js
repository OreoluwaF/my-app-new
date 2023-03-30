import React from 'react';
import AddressForm from './AddressForm';
import PaymentMethod from './PaymentMethod';
import PlaceOrderButton from './PlaceOrderButton';

function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <AddressForm />
      <PaymentMethod />
      <PlaceOrderButton />
    </div>
  );
}

export default CheckoutPage;
