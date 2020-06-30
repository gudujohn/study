package create.acabstractfactory;

/**
 * 这个工厂生产的是一个产品族，这个产品族中包含了牛奶 和 披萨，这个产品族的 等级结构是：Hot
 * 因为不同等级结构的产品制作方式上有所区别，所以我们的制作流程会出现在我们的具体工厂里边
 *
 * 在我们抽象工厂的模式里边，我们的具体工厂，需要根据实际的生产需求而进行分类实现，达到的效果是，用不同的具体工厂实现分类，满足我们生产上的需求。
 * （一般情况下，我们的具体工厂类更加多的去关心我们的 产品等级结构。）
 * @author Administrator
 *
 */
public class HotFoodFactoryImpl implements IFactory {

	@Override
	public Pizza createPizza(String type) {
		if (type.equals("vgge")) {
			// pizza的准备步骤
			PizzaVgge pv = new PizzaVgge();
			pv.prepare();
			pv.make();
			pv.complete();
			return pv;
		}
		return null;
	}

	@Override
	public Milk createMilk(String type) {
		if (type.equals("apple")) {
			AppleMilk am = new AppleMilk();
			am.prepare();
			am.make();
			am.complete();
			return am;
		}
		return null;
	}
}