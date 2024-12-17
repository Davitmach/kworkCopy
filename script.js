function copyToClipboard(text) {

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {

        

        navigator.clipboard.writeText(text)

            .then(() => {

                console.log('Текст успешно скопирован в буфер обмена');

            })

            .catch(err => {

                console.error('Ошибка при копировании текста:', err);

            });

    } else {

        

        const textarea = document.createElement('textarea');

        textarea.value = text;

        textarea.style.position = 'fixed'; 

        textarea.style.top = '0';

        textarea.style.left = '0';

        textarea.style.opacity = '0';

        document.body.appendChild(textarea);

        textarea.focus();

        textarea.select();

        try {

            const successful = document.execCommand('copy');

            if (successful) {

                console.log('Текст успешно скопирован в буфер обмена (резервный метод)');

            } else {

                console.error('Не удалось скопировать текст (резервный метод)');

            }

        } catch (err) {

            console.error('Ошибка при копировании текста (резервный метод):', err);

        }

        document.body.removeChild(textarea);

    }

}