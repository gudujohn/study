package structural.addecorator;

//装饰者抽象类，它干了一件最重要的事情，就是第一次使用了我们的构造方法。
public class CakeDecorator implements Cake{
	Cake cake;
	public CakeDecorator(Cake cake) { // 这个构造函数，是为了能够处理上一步的对象，在这一步进行装饰
		this.cake = cake;
	}

	@Override
	public String nameDetail() {
		return cake.nameDetail();
	}

	@Override
	public Double price() {
		return cake.price();
	}

}
