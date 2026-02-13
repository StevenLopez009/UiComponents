import './OrderTrackingTimeline.css';

interface Props {
  order: Date;
  shipping: Date;
  transit: Date;
  sentToCustomer: Date;
}

function OrderTrackingTimeline({ order, shipping, transit, sentToCustomer }: Props) {
  const today = new Date();

  const steps = [
    { label: "Order Confirmed", date: order },
    { label: "Shipping", date: shipping },
    { label: "Transit", date: transit },
    { label: "Sent to Customer", date: sentToCustomer }
  ];
  
  return (
    <div className="order-tracking-timeline">

      <div className="card-header">
        <span className="badge">Timeline</span>
        <span className="status">
          <span className="dot"></span>
          In progress
        </span>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className={`icon ${today >= step.date ? 'completed' : ''}`}></div>
            <div className="content">
              <div className="row">
                <h4>{step.label}</h4>
                <span className="date">{step.date.toLocaleDateString()}</span>
              </div>
              <p className="description">Order placed and confirmed</p>
            </div>
          </div>
        ))}
      </div>

      <button className="rate-btn">
        Rate This Delivery
      </button>

    </div>
  );
}

export default OrderTrackingTimeline;
