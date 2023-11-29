package pe.cibertec.edu.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity(name="Orders")
public class Order {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
	private Date orderDate;
	private BigDecimal totalAmount;
	private String clientName;
	private String clientPhone;
	private String clientEmail;
	private String clientAddress;
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JsonIgnore
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
