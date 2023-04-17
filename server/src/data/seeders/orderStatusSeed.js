const OrderStatus = require("../models/OrderStatus");

async function orderStatusSeed() {
       const orderStatus = ['Pending','Canceled','Shipped','Delivered'];

       if ((await OrderStatus.find()).length <= 0) {
              orderStatus.forEach(x => {
                     const orderStatus = new OrderStatus({
                            status: x,
                     })
                     orderStatus.save();
              })

       }

}

module.exports = orderStatusSeed;