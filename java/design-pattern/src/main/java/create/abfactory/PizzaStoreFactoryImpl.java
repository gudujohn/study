package create.abfactory;;

public class PizzaStoreFactoryImpl implements IFactory {

	public void orderPizza(String typePizza){
		System.out.println("客户开始预定披萨...类型是："+typePizza);
		Pizza pizza = createPizza(typePizza);
		pizza.prepare();
		pizza.make();
		pizza.complete();
		System.out.println("披萨制作完成");
	}

	public void orderPizzaCold(String typePizza){
		System.out.println("客户开始预定披萨...类型是："+typePizza);
		Pizza pizza = createPizza(typePizza);
		pizza.prepare();
//		pizza.make();
		pizza.complete();
		System.out.println("披萨制作完成");
	}

	/**
	 * 现在来看，我们的这个店面，不管有多少pizza种类，都是由自己进行控制的，如果该店面新加了产品种类，只需要修改自己的pizza店的代码就可以了，而不会影响其他店的正常运行。
	 */
	@Override
	public Pizza createPizza(String typePizza) {
		if (typePizza.equals("vgge")) {
			return new PizzaVgge();
		}
		return null;
	}

	@Override
	public Pizza createPizzaCold(String type) {
		if (type.equals("vgge")) {
			return new PizzaVgge();
		}
		return null;
	}
}
