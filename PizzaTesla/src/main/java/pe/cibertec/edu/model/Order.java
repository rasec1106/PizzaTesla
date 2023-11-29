package pe.cibertec.edu.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity(name="Orders")
public class Order {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
	private Date orderDate;
	private BigDecimal productCost;
	private BigDecimal deliveryCost;
	private BigDecimal discount;
	private BigDecimal totalAmount;
	@OneToMany(mappedBy = "order" // name of the VARIABLE in the child class
            ,cascade = CascadeType.ALL) // to save also the into the child db
    private Set<OrderItem> orderItems;
	
	public void addOrderItem(OrderItem orderItem){
        if(orderItems == null){
            orderItems = new HashSet<>();
        }
        orderItems.add(orderItem);
        orderItem.setOrder(this);;
    }
}
