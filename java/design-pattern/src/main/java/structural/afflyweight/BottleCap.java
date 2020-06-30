package structural.afflyweight;

//抽象享元类，里边包含了 共享的状态以及非共享状态。
public interface BottleCap {
	
	//内部状态
	String getColor();
	
	//外部状态
	String getCode(String different);
}
