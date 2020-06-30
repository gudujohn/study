package structural.addecorator;

//具体的装饰者类，第一点，继承了父类的构造方法，第二点，实现了具体的装饰内容。
public class EggCakeDecorator extends CakeDecorator{

	public EggCakeDecorator(Cake cake) {
		super(cake);
	}

	//实现具体的装饰内容
	@Override
	public String nameDetail() {
		return "鸡蛋"+super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price()+1.5;
	}
}
