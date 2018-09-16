/* @flow */

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Paragraph, Button, Dialog } from 'react-native-paper';

const DialogWithLongText = ({
  visible,
  close,
  title,
  description,
  rating
}: {
  visible: boolean,
  close: Function,
}) => (
  <Dialog onDismiss={close} visible={visible}>
    <Dialog.Title> {title} | {rating} </Dialog.Title>
    <Dialog.ScrollArea style={{ maxHeight: 220, paddingHorizontal: 0 }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
        <Paragraph>
          {description}
        </Paragraph>
      </ScrollView>
    </Dialog.ScrollArea>
    <Dialog.Actions>
      <Button primary onPress={close}>
        OK
      </Button>
    </Dialog.Actions>
  </Dialog>
);

export default DialogWithLongText;
