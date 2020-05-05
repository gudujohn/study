package 结构型模式.decorator;

public class MeetCakeDecorator extends CakeDecorator {

	public MeetCakeDecorator(Cake cake) {
		super(cake);
	}

	// ????�ؼ�����
	@Override
	public String nameDetail() {
		return "ţ��" + super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price() + 2.0;
	}
}
