package 结构型模式.compose;

public class CS extends Game {

	public CS(String name) {
		super(name);
	}

	@Override
	public void display() {
		System.out.println("这个游戏是：" + super.getName());
	}

}
