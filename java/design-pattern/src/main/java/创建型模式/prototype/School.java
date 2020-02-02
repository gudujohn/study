package 创建型模式.prototype;

import java.io.Serializable;

/**
 * 我这个school不想提共克隆方法，但是现在被迫提供啦，这就不完美了，而且造成了很多类的代码臃肿，只要是相关类都要写上clone
 */
public class School implements Serializable {

	private static final long serialVersionUID = -2609633326788700883L;
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
