package 创建型模式.abstractfactory;

public interface IFactory {
	/**
	 * 我们能够看到，我们的接口类，只需要关心我们的产品族，意思就是，无论该产品有多少个等级，我们只有这样的简单的明了的两种或者多种抽象方法、
	 *
	 * ??产品等级谁去关心呢？ 多数情况下我们的具体工厂关心
	 *
	 * 他只暴露给了外边一个信息，这个信息是createpizza和createmilk
	 * @param type
	 * @return
	 */
	public Pizza createPizza(String type);

	public Milk createMilk(String type);
}
