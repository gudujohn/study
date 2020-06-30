package structural.addecorator;

public class MeetCakeDecorator extends CakeDecorator {

	public MeetCakeDecorator(Cake cake) {
		super(cake);
	}

	@Override
	public String nameDetail() {
		return "牛肉" + super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price() + 2.0;
	}
}
