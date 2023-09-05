import { Container, Input, Radio, RadioGroup, Stack, Divider, Heading, Box, Text, Textarea, Spacer, Button } from '@chakra-ui/react'
import React from 'react'
import { Formik } from 'formik';

function AddQuestionForm() {

  //question ID auto generated
  // Question Title Question Description Question Category Question Complexit


  const onSubmit = data => console.log(data);

  return (
    
    <Box >
      <Container pb={20}>
        <Heading>Add Question</Heading>
      </Container>

      <Container mb={100}>
        {/* <Formik
          initialValues={{title: '', category: '', complexity: '', description: ''}}
          onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        > */}
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Text mb='20px' fontSize={'lg'} fontWeight={'semibold'}>Question Title</Text>
              <Input name='title' onChange={handleChange} value={values.title} />
              <Divider my={10} />
              <Text mb='20px' fontSize={'lg'} fontWeight={'semibold'}>Question Category</Text>
              <Input name='category' onChange={handleChange} value={values.category}/>
              <Divider my={10} />
              <Text mb='20px' fontSize={'lg'} fontWeight={'semibold'}>Question Complexity</Text>
              
              <RadioGroup onChange={handleChange} value={values.complexity} name='complexity'>
                <Stack direction='row' spacing={16}>
                  <Radio size='md' value='Easy'>Easy</Radio>
                  <Radio size='md' value='Medium'>Medium</Radio>
                  <Radio size='md' value='Hard'>Hard</Radio>
                </Stack>
              </RadioGroup>
              
              <Divider my={10} />
              <Text mb='20px' fontSize={'lg'} fontWeight={'semibold'}>Question Description</Text>
              <Textarea name='description' onChange={handleChange} value={values.description} />
              
              <Box display={'flex'} justifyContent={'flex-end'} py={16}>
              <Button type='submit'>Submit</Button>
              </Box>
            </form>
          )
        }
        
        {/* </Formik> */}
      </Container>
    

    </Box>
  )
}

export default AddQuestionForm