# twnotifhider

## For Hanna

<font size="7">**fk you hanna**  
**fk you hanna**  
</font>  

## Usage

Simply paste the program code into your browser's console (usually accessible via `F12` on most browsers). Note that the program will cease to run upon refreshing the page.

프로그램 코드를 브라우저의 콘솔에 붙여 넣으세요 (대부분의 브라우저에서는 `F12`로 액세스 가능합니다). 페이지를 새로고침하면 프로그램이 실행되지 않습니다. 다시 실행하려면 콘솔에 다시 붙여 넣으십시오.

### Tampermonkey

If you wish to use this program more persistently, you can consider integrating it into a userscript manager like Tampermonkey. This will allow the program to run automatically without having to manually paste the code every time you visit a page.

이 프로그램을 지속적으로 사용하고 싶다면, 탬퍼몽키와 같은 유저스크립트 관리자에 통합하는 것을 고려할 수 있습니다. 이렇게 하면 페이지를 방문할 때마다 코드를 수동으로 붙여 넣지 않아도 프로그램이 자동으로 실행됩니다.

(Tampermonkey 설명은 추후에 추가 예정입니다)

## Known Issues

1. Posts with multiple likes that don't display the name 'hanna' in the notification message (e.g. 'Maru and 58 more liked your post') cannot be filtered.<br>
   여러 사람이 마음을 누른 게시물에서 '한나'라는 이름이 알림 메시지에 표시되지 않는 경우 (예: 'Maru님 외 58명이 내 게시물을 마음에 들어 합니다') 필터링할 수 없습니다.<br>
In such cases, more profile pictures are displayed than usernames, so the profile picture of 'hanna' might be visible if it is within the appropriate range.<br>
   위와 같은 경우 사용자 이름보다 프로필 사진이 더 많이 표시되므로 경우에 따라 '한나'의 프로필 사진이 표시될 수 있습니다.

2. The script doesn't 'block' hanna but rather visually removes 'hanna' from your notification page. This means it's not a permanent solution, and others can still see Hanna's likes.  <br>
   이 스크립트는 한나를 '차단'하는 게 아니라 알림 페이지에서 한나를 시각적으로 제거하기만 합니다. 이는 영구적인 해결책이 아니며 다른 사람들은 여전히 한나의 반응을 볼 수 있습니다.<br>

3. Detection is based on nicknames. So, if someone is named 'Hanna' or includes the word 'Hanna' in their nickname, even if they're not the spammer, their notifications will still be removed.  <br>
   한나 감지는 닉네임을 기반으로 이루어집니다. 따라서 누군가가 'Hanna'라는 이름을 사용하거나 이름에 'Hanna'라는 단어를 포함하고 있더라도 그들의 알림이 제거됩니다.<br>

4. The script cannot remove the '1' badge when receiving new notifications. Reloading resets the script, which is counterintuitive. I am looking for solutions. Until then, you will have to refresh and re-run the script after receiving new notifications. Or, you can automate this process with Tampermonkey.<br>
   이 스크립트는 새로운 알림을 받을 때 알림에 뜨는 '1' 배지를 제거할 수 없습니다. 페이지를 새로고침하면 스크립트가 재설정되어 비직관적입니다. 가능한 경우 탬퍼몽키를 활용해 이 과정을 자동화할 수 있습니다. 직접 콘솔로 스크립트를 실행하는 경우에는 부득이하게 새로고침 후 스크립트를 다시 실행해야 합니다.<br>

5. So far the script only supports English and Korean environment. You can either add your language's aria-label attribute yourself in the LANGUAGES object or conact me to update the code for your language.<br>
    현재 이 스크립트는 한국어와 영어만 지원합니다. 다른 언어에서도 사용하기를 원하시면 LANGUAGES 오브젝트에 직접 본인 언어의 aria-label 속성을 추가하시거나, 저에게 연락하여 코드를 업데이트해달라고 요청하십시오.
   

## Warning

Always ensure that you understand and trust any code that you run in your browser console or install as a userscript. Running malicious or untrusted code can compromise the security of your data and personal information.

브라우저 콘솔에서 실행하거나 사용자 스크립트로 설치하는 모든 코드를 이해하고 신뢰하는지 항상 확인하세요. 악의적인 또는 신뢰할 수 없는 코드를 실행하면 데이터와 개인 정보의 보안이 침해될 수 있습니다.

## License

[MIT License](LICENSE)

## Credits

Developed by EukkMaru

개발자 윾마루

## Contact

If you have any questions or feedback, feel free to contact @EukkMaru on Discord

질문이나 피드백이 있으시면 디스코드 @EukkMaru로 연락주세요