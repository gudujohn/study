package 创建型模式.factory;

/**
 * 抽象工厂类，也是我们工厂设计模式的一个核心思想类（面向接口编程）
 * @author Administrator
 *
 */
public interface IFactory {
	Pizza createPizza(String type);

	/**
	 * 为了与我们抽象工厂模式进行对比而添加的代码
	 * 如果我们这个工厂生产的产品增加了，也就是说我们的产品族不单一，我们可以直接在我们的Factory类中
	 * 加入我们新的抽象方法供我们的具体工厂实现。
	 * @param type
	 * @return
	 */
	Mike createMilk(String type);

	/**
	 *为了与我们抽象工厂模式进行对比而添加的代码
	 *发现，现在这个pizza店 ，有好多顾客，希望能够购买 未经烤制的 生pizza，想回家自己冷冻起来，自己做
	 *现在发现，工厂类中有一个createPizza方法，但是这个方法已经被我们的pizzaStroe进行了实现，而且做出来的产品是成熟的pizza
	 *既然有pizza的产品结构等级改变，那么原来的方法一个肯定是不够用了，我们需要在此添加一个方法。这个方法用于制作新的等级结构产品
	 */
	Pizza createPizzaCold(String type);

}
