# 术语
- JDK - Java Development Kit - Java开发工具
- JRE - Java Runtime Enviroment - Java运行环境
- JVM - Java Vitual Machine - Java虚拟机
- JSR - Java Specification Request - JSR规范
- API - Application Programming Interface - 应用程序编程接口
- IDE - Integrated Development Environment - 集成开发环境

---

# 安装
 - 下载JDK
 
 - 设置环境变量
	 - JAVA_HOME - 指向JDK的安装目录
	 - Path - 指向%JAVA_HOME%\\bin
		- java - 这个可执行程序其实就是JVM，执行编译后的代码;
		- javac - Java的编译器，用于把Java源文件(.java)编译成Java字节码文件(.class);
		- jar - 用于将一组.class文件打包成一个.jar文件，便于发布;
		- javadoc - 文档生成工具
		- jdb - Java调试器

---

# 程序构造

## package

## import

## class

## main方法

##  语句
   一条完整的Java语句，所以必须以**分号**结束。

## 代码块

## 注释
- 行注释 - //

- 块注释 - /*...*/

- 文档注释 - /**...*/
	- @author - 作者
	- @param - 参数
	- @return - 返回值
	- @throw - 可能引发的异常


## 关键字
有特殊含义的单词，这些保留字不能用于常量、变量、和任何标识符的名称。



## 变量

变量就是申请内存来存储值。也就是说，当创建变量的时候，需要在内存中申请空间。

声明一个变量后，必须用赋值语句对变量进行**显式初始化**, 千万不要使用未初始化的  
变量。

内存管理系统根据变量的类型为变量分配存储空间，分配的空间只能用来储存该类型数据。


```java
	int age = 18;
```

变量命名规范:
TODO...


注意事项：
1. 变量名大小写敏感；
2.  不要使用Java保留字作为变量名；


## 常量

在 Java 中， 利用关键字 final 指示常量。

关键字 final 表示这个变量只能被赋值一次。一旦被赋值之后， 就不能够再更改了。

习惯上,   常量名使用全大写。
```java
	final double PI = 3.14;
```