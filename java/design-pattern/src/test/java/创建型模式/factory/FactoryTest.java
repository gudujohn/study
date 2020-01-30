package 创建型模式.factory;

public class FactoryTest {
	
	public static void main(String[] args) {
		PizzaStoreFactoryImpl store = new PizzaStoreFactoryImpl() ;
		store.orderPizza("vgge");
		store.createPizza("vgge");
		
		store.orderPizzaCold("vgge");
		store.createPizzaCold("vgge");
	}
}
