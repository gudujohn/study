package huawei.qb;

import java.util.Scanner;

/**
 * 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。
 * 输入：
 * 合法坐标为A(或者D或者W或者S) + 数字（两位以内）
 * 坐标之间以;分隔。
 * 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
 * 下面是一个简单的例子 如：
 * A10;S20;W10;D30;X;A1A;B10A11;;A10;
 * 处理过程：
 * 起点（0,0）
 * + A10    =  （-10,0）
 * + S20    = (-10,-20)
 * + W10    = (-10,-10)
 * + D30    = (20,-10)
 * + x      = 无效
 * + A1A    = 无效
 * + B10A11 = 无效
 * + 一个空 不影响
 * + A10    =  (10,-10)
 * 结果 （10， -10）
 */
public class MainInportant17 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        while(input.hasNext()){
            String str = input.nextLine();
            String[] instructs = str.split(";");
            Point origin = new Point();
            for(String instruct : instructs) {
                origin.move(new Point(instruct));
            }
            System.out.println(origin);
        }
    }
}
class Point{
    private int x;
    private int y;

    public Point(){}
    public Point(String instruct) {
        int steps = Integer.parseInt(instruct.substring(1));
        switch(instruct.charAt(0)){
            case 'A':
                this.x = -steps;
                break;
            case 'S':
                this.y = -steps;
                break;
            case 'W':
                this.y =  steps;
                break;
            case 'D':
                this.x =  steps;
                break;
        }
    }
    public void move(Point target){
        this.x += target.x;
        this.y += target.y;
    }
    public int getX(){
        return x;
    }
    public void setX(int x) {
        this.x = x;
    }
    public int getY(){
        return y;
    }
    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString(){
        return x + "," + y;
    }
}