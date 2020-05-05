package 结构型模式.composite;

//Leaf 叶子结点，是抽象对象的具体的实现类，代表了 部分。
public class Dota extends Game {

	public Dota(String name) {
		super(name);
	}

	@Override
	public void display() {
		System.out.println("这个游戏是：" + super.getName());
	}

}
