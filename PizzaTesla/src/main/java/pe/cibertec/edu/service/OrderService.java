package pe.cibertec.edu.service;

import pe.cibertec.edu.model.Order;

import java.util.List;

public interface OrderService {
  List<Order> getAllPizzaOrders();

  Order savePizzaOrder(Order order);

  Order getPizzaOrderById(long id);

  void deletePizzaOrderById(long id);
}
