const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  //   body;
  event.preventDefault();

  //   console.log(event.currentTarget.elements.subscription.value);

  //   console.log('Ето сабміт форми');

  //   const formRef = event.currentTarget.elements;
  //   console.dir(formRef);
  //   const mail = formRef.email.value;
  //   const password = formRef.password.value;
  //   const subscription = formRef.subscription.value;
  //   const formData = {
  //     mail,
  //     password,
  //     subscription,
  //   };

  //   console.log(mail, password, subscription);
  //   console.log(formData);

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('value', value);
    console.log('name', name);
  });

  console.log(formData);
}
