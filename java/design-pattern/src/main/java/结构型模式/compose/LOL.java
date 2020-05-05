package 结构型模式.compose;

public class LOL extends Game {

	public LOL(String name) {
		super(name);
	}

	@Override
	public void display() {
		System.out.println("这个游戏是：" + super.getName());
	}

}
