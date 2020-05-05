package 结构型模式.compose;

import java.util.HashMap;

public class temp {
	public static void main(String[] args) {
		HashMap<String, Object> mapStudent = new HashMap<String, Object>();
		mapStudent.put("name", "zs");
		mapStudent.put("age", 11);

		HashMap<String, Object> map = new HashMap<String, Object>();
		map.putAll(mapStudent);
		// 这里边就用到了我们的组合模式。我们来看一下，对于这个map类，
		// putAll方法并没有去真对的考虑 我们的key 与value的类型，我们能够发现，value有
		// string类型和Integer类型，但是我们能够一次性通过putall将我们的键值对存入到map。

		// 哪里用到了组合模式呢？？
		// 不管是string，interge，date，都是object的孩子。我们只需要考虑这些string，interge，date 类型，
		// 都是叶子结点，都是object的孩子。
	}
}
