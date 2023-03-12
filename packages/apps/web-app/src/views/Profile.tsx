import React, { useContext, useEffect, useState } from 'react';
import { Headers } from '../components/Header/Headers';
import { Button, TextInputField } from 'evergreen-ui';
import { AUTH_CONTEXT } from '../contexts/auth/auth-context';
import { useNavigate } from 'react-router-dom';
import { DialogDelete } from '../components/Profile/DeleteAccount/DialogDelete';

export const Profile = () => {
  const auth = useContext(AUTH_CONTEXT);

  // Control if user is connected
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.token) return navigate('/');
  }, []);

  const [edit, setEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <>
      <Headers />

      <DialogDelete
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />

      <main className={'px-4 mt-8'}>
        <article className="flex justify-between">
          <h1 className="text-2xl">Information</h1>
          <section className="flex gap-2">
            <Button
              onClick={() => setEdit((current) => !current)}
              appearance={edit ? 'primary' : 'default'}
              intent={edit ? 'danger' : 'none'}
            >
              {edit ? 'Cancel' : 'Edit'}
            </Button>
            <Button onClick={() => setDeleteDialog(true)} intent={'danger'}>
              Delete
            </Button>
          </section>
        </article>

        <form className="mt-4">
          <TextInputField
            label={'Email'}
            placeholder={auth.email ?? ''}
            disabled={!edit}
          />
          <TextInputField
            label={'Firstname'}
            placeholder={auth.firstname ?? ''}
            autoComplete="given-name"
            disabled={!edit}
          />
          <TextInputField
            label={'Lastname'}
            placeholder={auth.lastname ?? ''}
            autoComplete="family-name"
            disabled={!edit}
          />

          <hr className="my-6" />

          <h1 className="text-xl text-gray-600 mb-2">Password section</h1>

          <TextInputField
            label={'Current Password'}
            type={'password'}
            autoComplete={'current-password'}
            disabled={!edit}
          />
          <TextInputField
            label={'New Password'}
            autoComplete={'new-password'}
            disabled={!edit}
          />
          <TextInputField
            label={'Confirm New Password'}
            autoComplete={'new-password'}
            disabled={!edit}
          />

          <Button className="w-full" appearance="primary" disabled={!edit}>
            Save
          </Button>
        </form>
      </main>
    </>
  );
};
