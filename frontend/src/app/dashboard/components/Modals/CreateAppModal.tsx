// Dependencies
import React, {
  FC,
  ReactElement,
  useContext,
  useState,
  useEffect,
  memo,
} from "react";
import {
  Modal as ModalUI,
  Badge,
  Input,
  PrimaryButton,
  LinkButton,
  Icon,
} from "@contentpi/ui";
import { redirectTo, slugFn, waitFor } from "@contentpi/utils";
import {
  generateHexCode,
  invertHexCode,
  getEmptyValues,
} from "@contentpi/core";

import { useMutation } from "@apollo/client";

// Contexts
import { FormContext } from "@contexts/form";
import { UserContext } from "@contexts/user";

// Mutation
import CREATE_APP_MUTATION from "@graphql/apps/createApp.mutation";

interface iProps {
  isOpen: boolean;
  label: string;
  options: any;
  onClose(): void;
}

const Modal: FC<iProps> = ({
  isOpen,
  label,
  onClose,
  options,
}): ReactElement => {
  // Contexts
  const { t } = useContext(I18nContext);

  // States
  const [values, setValues] = useState({
    appName: "",
    identifier: "",
    icon: generateHexCode(),
    description: "",
    userId: "",
  });
  const [required, setRequired] = useState<any>({
    appName: false,
    identifier: false,
  });
  const [loading, setLoading] = useState(false);

  // Mutations
  const [createMutation] = useMutation(CREATE_APP_MUTATION);

  // Contexts
  const { user } = useContext(UserContext);
  const { onChange, setValue } = useContext(FormContext);

  // Methods
  const handleSubmit = async (): Promise<void> => {
    const emptyValues = getEmptyValues(values, ["appName", "identifier"]);

    if (emptyValues) {
      setRequired(emptyValues);
    } else {
      setLoading(true);

      waitFor(2).then(async () => {
        setLoading(false);

        const { data: dataCreateApp } = await createMutation({
          variables: values,
        });

        if (dataCreateApp.createApp) {
          redirectTo(`/dashboard/${dataCreateApp.createApp.id}/master`, true);
        }
      });
    }
  };

  const handleIconColor = (): void =>
    setValue("icon", generateHexCode(), setValues);

  const _onChange = (e: any): any => {
    if (e.target.name === "appName") {
      setValue("identifier", slugFn(e.target.value), setValues);
    }

    onChange(e, setValues);
  };

  // Effects
  useEffect(() => {
    // Setting up the user
    if (user) {
      setValues((prevValues: any) => ({
        ...prevValues,
        userId: user.id,
      }));
    }
  }, [user]);

  return (
    <ModalUI isOpen={isOpen} label={label} options={options} onClose={onClose}>
      <div>
        <label htmlFor="appName">
          App Name {required.appName && <Badge danger>{t("Required")}</Badge>}
        </label>
        <Input
          name="appName"
          placeholder="First App? Try Blog or Forums"
          hasError={required.appName}
          onChange={_onChange}
          value={values.appName}
        />
      </div>

      <div>
        <label htmlFor="identifier">
          Identifier
          {required.identifier && <Badge danger>{t("Required")}</Badge>}
        </label>
        <Input
          name="identifier"
          value={values.identifier}
          hasError={required.identifier}
          onChange={_onChange}
        />
      </div>

      <div>
        <label htmlFor="icon">
          {t("Icon Color")}{" "}
          <Icon type="fas fa-sync-alt" onClick={handleIconColor} />
        </label>
        <Input
          name="icon"
          onChange={_onChange}
          value={values.icon}
          readOnly
          style={{
            color: invertHexCode(values.icon),
            backgroundColor: values.icon,
          }}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <Input
          name="description"
          placeholder="Small description about your new app"
          onChange={_onChange}
          value={values.description}
        />
      </div>

      <div className="buttons">
        <LinkButton onClick={onClose}>Cancel</LinkButton>
        <PrimaryButton
          onClick={handleSubmit}
          isLoading={loading}
          loadingText="Creating App..."
        >
          Create App
        </PrimaryButton>
      </div>
    </ModalUI>
  );
};

export default memo(Modal);
