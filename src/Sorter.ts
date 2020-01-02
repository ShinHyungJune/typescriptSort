import {NumberCollection} from './NumberCollection';

export abstract class Sorter {

    /* 추상 클래스는 언제 사용해야 할가?
    * Sort를 다른 모든 클래스에 다 공통적으로 쓰는거니까
    * 여기다 sort를 정의하고 다른 클래스들한테 물려주고싶음
    * 그런데 swap, compare 하는 방법은 다 달라서 Sorter에서 정의한 후
    * 물려줄 수는 없음. 그럼 부모한테는 없지만 자식에서 정의한 method를
    * 사용하겠다고 컴파일러한테 알려주려면 어떻게 해야할가?
    * 이 때 추상 클래스를 사용하는거임.
    * 추상 클래스는 실제 메소드를 구현해서 상속할 수도 있고,
    * 이런 메소드를 만들어줘~ 약속이야 하고 규제를 걸 수도 있어
    * */
    
    /* 추상 클래스 vs 인터페이스
    *  추상클래스 : 실제 상속시킬 구현체(메소드) + 메소드 만들기 약속
    *  인터페이스 : 메소드 만들기 약속
    * */
    sort(): void {
        const length = this.length;

        for(let i = 0; i <length; i++){
            for(let j = 0; j < length - i - 1; j++){
                if(this.compare(j, j+1)){
                    this.swap(j, j+1);
                }
            }
        }
    }

    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

}