package create.aasimplefactory;

/**
 * 核心类，工厂类，用于制造不同种类的pizza
 * 一旦成序稳定在生产环境，如果新加入了一家店面，这时候我们需要加入新的pizza种类，
 * 此时我们应该修改我们的Factory类，但是如此进行修改的话，会影响我们的其他100家分店。这就是我们简单工厂模式的一个瓶颈
 * 最笨的方法，增加一个分店，为了不影响已经正常运行的分店，我们就多增加一个工厂类就行了。（但是，这个方式非常傻瓜，我们只能发展更好的设计模式，工厂模式应运而生）
 */
public class SimplePizzaFactory {
	public Pizza createPizza(String typePizza){
		if (typePizza.equals("VGGE")) {
			return new PizzaVegg();
		}else if (typePizza.equals("MEET")) {
			return new PizzaMeet();
		} else {
			return null;
		}
	}
}
