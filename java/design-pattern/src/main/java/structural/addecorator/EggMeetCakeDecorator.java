package structural.addecorator;

public class EggMeetCakeDecorator extends CakeDecorator {

	public EggMeetCakeDecorator(Cake cake) {
		super(cake);
	}

	@Override
	public String nameDetail() {
		return "牛奶" + super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price() + 3.0;
	}
}
