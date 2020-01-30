package 创建型模式.abstractfactory;

public class AbstractFactoryTest {
	public static void consume(String typeFood,String typePizza, String type){
		if (typeFood.equals("pizza")) {
			if (type.equals("cold")) {
				if (typePizza.equals("vgge")) {
					ColdFoodFactoryImpl cff = new ColdFoodFactoryImpl();
					cff.createPizza("vgge");
				}
			}
			if(type.equals("hot")){
				
			}
		}
	}
	
	public static void main(String[] args) {
		consume("pizza", "vgge", "cold");
	}
}
