package structural.afflyweight;

import java.util.HashMap;
import java.util.Map;

//factory 并不是制造工厂，它是提供了一个享元池工厂。用于维护我们的享元池（静态的存储空间。）
public class CapFactory {
	//共享技术，享元池，静态存储空间。每次调用的时候，先去我们的存储空间内部进行寻找，如果找到了，就不需要创建新的对象了。
	//重点： 如果找到了，不需要创建新的对象。包含了两个意思，第一个意思：减少了对象的创建，第二个,提高了对象的重复利用。
	private static Map<String, BottleCap> map = new HashMap<String, BottleCap>();
	
	//bottleCap 代表的是 nocap类型，只不过，由于我们的nocap类型的类可能比较多，所以我们用父类进行关联，方便我们的test客户端进行正确的nocap类型的传入。
	private static BottleCap bottleCap;
	
	public static BottleCap getBottleCap(String color,BottleCap bottleCap){
		if (map.get(color) != null) {
			return map.get(color);
		}
		BottleCap cap = new OkCap(color, bottleCap);
		map.put(color, bottleCap);
		return cap;
	}
	
}
