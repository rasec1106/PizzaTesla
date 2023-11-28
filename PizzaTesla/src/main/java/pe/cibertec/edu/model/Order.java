package pe.cibertec.edu.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "timestamp")
  private String timestamp;

  @Column(name = "username")
  private String username;

  @Column(name = "status")
  private String status;

  @Column(name = "quantity")
  private int quantity;

  @Column(name = "cost")
  private double cost;
}
