package 结构型模式.compose;

import java.util.ArrayList;
import java.util.List;

//它是为了存储管理我们的  抽象对象（Game）。是一个容器。
//重点关注：这里为什么要继承我们的Game呢？ 因为只有这样，他才能够对我们的所有的相关的对象，不管是整体还是部分进行一个完善的管理。
public class GameStore extends Game {

	private List<Game> gameList;

	public GameStore(String name) {
		super(name);
		gameList = new ArrayList<Game>();
	}

	// 游戏展示
	@Override
	public void display() {
		for (Game game : gameList) {
			game.display();
		}
	}

	public void add(Game game) {
		gameList.add(game);
	}

	public void remove(int index) {
		gameList.remove(index);
	}
}
