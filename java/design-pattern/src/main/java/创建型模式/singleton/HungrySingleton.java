package 创建型模式.singleton;

public class HungrySingleton {

    private static final HungrySingleton instance = new HungrySingleton();

    private HungrySingleton() {}

    public HungrySingleton getInstance() {
        return instance;
    }

}