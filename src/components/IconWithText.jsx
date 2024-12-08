import CustomerServiceIcon from "../assets/icons/customer-service-icon";
import DeliveryIcon from "../assets/icons/delivery-icon";
import WarrantyIcon from "../assets/icons/warranty-icon";

const IconWithText = () => {
  return (
    <section className="flex gap-20 justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <DeliveryIcon className="bg-colors-text-3 rounded-full p-2 border-colors-text-2 border-8 size-16" />
        <div className="flex flex-col text-center">
          <h4 className="text-xl font-semibold">FREE AND FAST DELIVERY</h4>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <CustomerServiceIcon className="bg-colors-text-3 rounded-full p-2 border-colors-text-2 border-8 size-16" />
        <div className="flex flex-col text-center">
          <h4 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h4>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <WarrantyIcon className="bg-colors-text-3 rounded-full p-2 border-colors-text-2 border-8 size-16" />
        <div className="flex flex-col text-center">
          <h4 className="text-xl font-semibold">MONEY BACK GUARANTEE</h4>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default IconWithText;
