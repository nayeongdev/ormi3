# .py파일로 작성해서 실행해보세요.
import os

while True:
    userinput = input('>')
    if userinput == 'pwd':
        # print('현재 위치 출력')
        # print('\\'.join(__file__.split('\\')[:-1]))
        print(os.getcwd())
    elif userinput == 'dir' or userinput == 'ls':
        # print('현재 폴더에 폴더와 파일명 출력')
        print(os.listdir(os.getcwd()))
    elif userinput == 'exit':
        print('안녕히가세요.')
        break
