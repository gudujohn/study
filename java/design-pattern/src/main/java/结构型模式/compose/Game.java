package 结构型模式.compose;

//Component组件，就是我们的抽象对象，我们最终的目的是管理这个抽象对象的（父类，代表了整体的对象）
public abstract class Game {
	String name;

	public Game(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public abstract void display();
}
