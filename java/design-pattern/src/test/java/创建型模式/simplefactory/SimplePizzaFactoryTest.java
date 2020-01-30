package 创建型模式.simplefactory;

public class SimplePizzaFactoryTest {
	public static void main(String[] args) {
		SimplePizzaFactory spFactory = new SimplePizzaFactory();
		SimplePizzaStore pizzaStore = new SimplePizzaStore(spFactory);
		pizzaStore.orderPizza("VGGE");
		
		pizzaStore.orderPizza("MEET");
	}
}
