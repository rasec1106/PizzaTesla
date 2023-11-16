package pe.cibertec.edu.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class Product {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPizza;
    private String nombre;
    private String tamaño;
    private int	slides;
    private int precio;
	
    public Product() {
	}

	public Product(int idPizza, String nombre, String tamaño, int slides, int precio) {
		this.idPizza = idPizza;
		this.nombre = nombre;
		this.tamaño = tamaño;
		this.slides = slides;
		this.precio = precio;
	}

	public int getIdPizza() {
		return idPizza;
	}

	public void setIdPizza(int idPizza) {
		this.idPizza = idPizza;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTamaño() {
		return tamaño;
	}

	public void setTamaño(String tamaño) {
		this.tamaño = tamaño;
	}

	public int getSlides() {
		return slides;
	}

	public void setSlides(int slides) {
		this.slides = slides;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}
    
    
    
}
