package 结构型模式.decorator;

public class MilkCakeDecorator extends CakeDecorator {

	public MilkCakeDecorator(Cake cake) {
		super(cake);
	}

	// ????�ؼ�����
	@Override
	public String nameDetail() {
		return "����" + super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price() + 3.0;
	}
}
