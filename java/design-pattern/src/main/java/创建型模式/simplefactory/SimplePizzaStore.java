package 创建型模式.simplefactory;

public class SimplePizzaStore {
	private SimplePizzaFactory spFactory;
	public SimplePizzaStore(SimplePizzaFactory spFactory){
		this.spFactory = spFactory;
	}
	public void orderPizza(String typePizza){

		System.out.println("客户开始预定披萨...类型是："+typePizza);
		Pizza pizza = spFactory.createPizza(typePizza);
		pizza.prepare();
		pizza.make();
		pizza.complete();
		System.out.println("披萨制作完成");
	}
}
