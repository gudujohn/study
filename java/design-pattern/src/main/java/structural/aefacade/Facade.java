package structural.aefacade;

//包装了子部件，隐藏了子部件，说白了，就是实现一键干啥啥。
public class Facade {
	Air air;
	Tv tv;
	Light light;
	
	public Facade(Air air,Tv tv,Light light) {
		this.air = air;
		this.tv = tv;
		this.light = light;
	}
	
	//一键开开开
    public  void allOpen(){
    	air.open();
    	tv.open();
    	light.open();
    }
    
  //一键关关
    public  void allDown(){
    	air.down();
    	tv.down();
    	light.down();
    }
}
