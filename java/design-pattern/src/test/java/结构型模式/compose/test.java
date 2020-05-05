package 结构型模式.compose;

public class test {
	public static void main(String[] args) {
		GameStore gameStore = new GameStore("所有游戏");
		CS cs = new CS("CS");
		GameStore gameStore2 = new GameStore("组团开黑竞技打架游戏");
		Dota dota = new Dota("DOTA");
		LOL lol = new LOL("LOL");

		gameStore.add(cs);
		gameStore2.add(dota);

		gameStore2.add(lol);
		gameStore.add(gameStore2);
		// 整体-部分的 第二种表现形式 ：我们将gameStore作为整体进行表示，将log作为部分表示。我们可以看到
		// gamestore能够add 单个的叶子结点游戏（部分），也能够add gameStore（整体）。

		// 整体与部分到底谁是谁。
		// Game可以看成是整体，GameStore可以看成是整体。Lol/dota/cs看成是部分。
		// Game可以看成是整体，GameStore可以看成是整体。 老师为什么要这样搞我们呢？
		// 这句话极度说明的父类的问题，gamestore他是继承自我们的Game的，Game使我们的一个总体的父类，只有继承了Game的gamestore
		// 才拥有 “整体” 的这个属性

		System.out.println("所有游戏*******");
		gameStore.display();

		System.out.println("=======");

		System.out.println("组团开黑竞技打架游戏*******");
		gameStore2.display();
	}
}
