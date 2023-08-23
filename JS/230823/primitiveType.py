# 원시타입의 특징 : 값의 참조가 저장되는 것이 아닌 값자체가 복사되어 저장된다

str1 = 'hello'
str2 = str1
print(str2);  # 'hello'
print('str1 메모리: {} / str2 메모리: {}'.format(id(str1),id(str2)))

str1 = 'world'
print(str2);  # str2에 할당된 값은 여전히 'hello' 입니다.
print('str1 메모리: {} / str2 메모리: {}'.format(id(str1),id(str2)))