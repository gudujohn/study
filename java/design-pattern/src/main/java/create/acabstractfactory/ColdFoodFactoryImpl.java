package create.acabstractfactory;

/**
 * 这个工厂生产的是一个产品族，这个产品族中包含了牛奶 和 披萨，这个产品族的 等级结构是：Cold
 *
 * @author Administrator
 *
 */
public class ColdFoodFactoryImpl implements IFactory {

	@Override
	public Pizza createPizza(String type) {
		if (type.equals("vgge")) {
			PizzaVgge pv = new PizzaVgge();
			pv.prepare();
//			pv.make(); 生冷食物的制作呢，不需要make
			pv.complete();
			return pv ;
		}
		return null;
	}

	@Override
	public Milk createMilk(String type) {
		if (type.equals("apple")) {
			AppleMilk am = new AppleMilk();
			am.prepare();
//			am.make();
			am.complete();
			return am;
		}
		return null;
	}

}
